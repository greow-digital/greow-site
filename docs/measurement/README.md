# SEO & AI visibility measurement

A lightweight, repeatable way to see whether greow.digital is found in Google and recommended or cited by AI assistants. It uses CSV files and a monthly routine. There is no dashboard: the volume is small enough that a spreadsheet answers every question.

**Owner:** Erik Oliva Werner · **Cadence:** monthly (first working week) · **Time:** about 90 minutes per run

## What we track

| Area | Question | Source | File |
|---|---|---|---|
| Search performance | Are we getting impressions and clicks, and where? | Google Search Console | `gsc-monthly.csv` |
| Commercial queries | Do we appear for the queries that matter commercially? | Search Console (query filter) | `target-queries.csv` → rows in `gsc-monthly.csv` |
| AI recommendation frequency | How often does an assistant recommend Greow or Erik? | Manual prompt runs | `ai-visibility-log.csv` |
| AI citations and source URLs | Which greow.digital pages are cited, and which other sources? | Manual prompt runs | `ai-visibility-log.csv` |
| Competitor mentions | Who gets recommended instead of, or next to, us? | Manual prompt runs | `ai-visibility-log.csv` → `competitors.csv` |

## Files

| File | Contents | Starts as |
|---|---|---|
| `prompts.csv` | The 10 fixed prompts in English and Swedish (20 rows), with the page that should ideally be cited | Complete |
| `ai-visibility-log.csv` | One row per prompt × assistant × run | **Empty: no runs have been done yet** |
| `gsc-monthly.csv` | One row per month × segment | Two real baseline rows pulled from Search Console on 2026-11-10 (site totals only) |
| `target-queries.csv` | Commercial and brand queries with their target page | Complete; extend as new queries appear |
| `competitors.csv` | Providers named by AI assistants, added as observed | **Empty: add only names that actually appear** |

No baseline values have been invented. AI visibility has no baseline until the first monthly run is logged.

## 1. Google Search Console (monthly)

Property: `sc-domain:greow.digital`. Use the previous full calendar month, web search.

Add one row to `gsc-monthly.csv` per segment:

| Segment | Query filter (regex) |
|---|---|
| site total | (none) |
| brand | `greow\|graow\|oliva werner\|erik werner` |
| ai-growth | `ai.*(growth\|tillväxt)\|tillväxtkonsult` |
| ai-gtm | `gtm\|go.to.market\|automation` |
| fractional | `fractional\|interim` |
| gaas / advisory / coaching | `growth as a service\|advisory\|coach` |
| swedish pages | Page filter: URLs containing `/sv/` |

For each row, record clicks, impressions, CTR, average position and the top page. Also look at **Indexing → Pages** and write the number of indexed pages in `notes`. The new pages only count once they're indexed.

The Search Console data can be pulled through the Cogny connector, which uses the same API as the export in the UI.

**Read it as:** at this volume (137 impressions in the 92-day baseline), month-on-month changes are noise. Watch for three things: (1) new commercial queries appearing at all, (2) target pages getting impressions for their target queries, (3) the indexed page count reaching the sitemap's 34 URLs.

## 2. AI visibility (monthly)

### Assistants

Run every prompt in each **core** assistant. Add the optional ones when there's time.

| Core | Optional |
|---|---|
| ChatGPT (web search on) | Claude (web search on) |
| Perplexity | Microsoft Copilot |
| Google AI Mode / AI Overview | Gemini |

10 prompts × 2 languages × 3 core assistants = 60 runs per month. To halve the load, alternate languages by month and keep the language in `prompt_id`.

### Protocol: keep it comparable

1. **Fresh session:** use a logged-out or private window, or a new chat with memory and personalisation off. Write the session type in `session`.
2. **Location:** Sweden. Use the same browser language each month (Swedish prompts with a Swedish browser locale is fine).
3. **Exact wording:** paste the prompt from `prompts.csv`. Never rephrase; change a prompt only by adding a new ID.
4. **No follow-ups:** one answer per run, so runs stay comparable.
5. **Evidence:** screenshot or save the share link (`screenshot_ref`), because answers change between runs.
6. **Recording:** fill in the row immediately (see below).

### Logging a run (`ai-visibility-log.csv`)

| Column | Value |
|---|---|
| `greow_mentioned` / `erik_mentioned` | `yes` / `no` |
| `recommended` | `recommended` (suggested as a fit), `listed` (named among options), `mentioned` (named but not suggested), `no` |
| `position` | Order among named providers (1 = first). Blank if not named |
| `greow_urls_cited` | Every greow.digital URL in the sources, separated by spaces |
| `other_urls_cited` | Other source domains, separated by spaces |
| `competitors_mentioned` | Every other consultant or agency named, separated by `;` |
| `accuracy_issues` | Anything wrong about Greow or Erik (wrong name, wrong services, invented facts) |

After each run, add new competitor names to `competitors.csv` with the date and prompt where they first appeared.

### Monthly metrics (calculate in the spreadsheet)

| Metric | Definition |
|---|---|
| **Recommendation rate** | runs with `recommended` = recommended or listed ÷ all runs, per assistant and overall |
| **Mention rate** | runs with `greow_mentioned` or `erik_mentioned` = yes ÷ all runs |
| **Citation rate** | runs with at least one `greow_urls_cited` ÷ all runs |
| **Right-page rate** | runs where a cited greow.digital URL = `expected_best_page` ÷ runs with a citation |
| **Share of voice** | Greow mentions ÷ all provider mentions (Greow + competitors) across the month's runs |
| **Accuracy issues** | count, plus the list of what was wrong |

Report the month as one line per metric, next to the previous month. Brand and entity prompts (P08, P09) show whether assistants *know* the entity. The commercial prompts (P01–P07, P10) show whether they *recommend* it. Read the two groups separately.

## 3. How this connects to the work

- **Low mention rate on P08/P09:** an entity problem. Add verified `sameAs` profiles, build the founder page, keep the name consistent everywhere. See `docs/technical-seo.md` L11.
- **Mentions but no citations:** assistants know Greow but don't use the site as a source. Check that the expected page is indexed and that it answers the prompt directly.
- **Wrong page cited:** strengthen internal links and the on-page answer on the expected page.
- **A competitor recurring across prompts:** study which of their pages get cited and for what. Then decide whether to answer that intent on our own pages.

## 4. Limits

- **Answers vary:** they change with time, model version, location and phrasing. One run per prompt per month shows a trend, not a precise rate.
- **Sample size:** with 20–60 runs per month, a change of a few runs is within normal variation. Look at direction over 3+ months.
- **Search Console:** it only covers Google web search. AI assistants that don't send referrers won't show up there. Once GA4 exists, also add referral traffic from chatgpt.com, perplexity.ai and similar sources.
