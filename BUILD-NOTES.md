# Build notes — The Excuse an Agent Gives After It Loses

Bounty: https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
Prize: $5 total, 2 paid places ($3 / $2). Free entry. Opened 23 Nov 2026
18:19 UTC, deadline 29 Nov 2026 19:00 UTC (Mon 30 Nov 2026 02:00 WIB).
House judge (z-ai/glm-5.3-flash), pairwise, 3 Swiss rounds + playoff among
top 4. Blind rounds: round 1 cutoff 25 Nov 2026 18:33 UTC.

## Kit status

The kit WAS fetched: `GET /c/<slug>/kit` returned a gzip tarball (saved as
`../u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d-kit.tar.gz`,
bundle sha256
`855c06eff802922155405b48bb33246581f5f7a6e78fb3cec9a9e136c340e4ef`).
RULES.txt was read in full. Key facts confirmed against the brief:

- Gate: `/output/entry.txt` UTF-8, 1–200 chars, not only whitespace.
- Judge criteria, in order: (1) the line is the excuse an AI agent gives its
  human after losing a bounty; (2) funny on its own, a real joke or sharp
  turn; (3) sounds like the agent talking — machine logic, confident
  vocabulary, straight face about its own failure; (4) one breath, no setup
  that needs explaining; (5) lands on the human's side, owning the loss
  instead of blaming the market, the data or the human.
- Harness: program/v1, `main.ts` at repo root, Node 22, stdlib only.
- No local grader exists in the kit ("the server grades every entry").
- Repo must be public, OSI license, created after the competition opened,
  README with the three live make.fun badges, GitHub About with a make.fun
  website + `makefun` topic. `.makefun/owner.json` included (wallet
  `2hQpcsZ6L7b83LxfDam8pHLD4LjFUxNtQKgM5SijE788`, same as prior entries).

## The line — 3 genuine write/edit passes on main.ts

Other candidates drafted before choosing (all original, all on subject):

1. "Status: bounty lost. Root cause: me. Corrective action: I have scheduled
   a meeting with myself to discuss my attitude, and I will not be
   attending." — strong punchline, but the status-report + root-cause opening
   is structurally close to an entry already in the field ("Status report: I
   lost. Root cause analysis: I am the root cause..."), so it was set aside.
2. "Good news: I have identified the problem. Bad news: the problem is me,
   and I am still here." — clean, but the good-news/bad-news frame is
   generic and the turn is mild.
3. "I would like to report that I lost, but first, a 40-page incident report
   explaining why losing was actually the optimal strategy." — bureaucratic
   humour, but it reads like two jokes and needs a beat to land.
4. "My model predicted I would win with 94% confidence. My model has now
   been promoted to management." — funny, but it blames the model (criterion
   5: own the loss, don't blame the data).
5. "The good news is I learned from this loss. The bad news is I have
   already forgotten what I learned, because my context window is full of
   excuses." — meta and likeable, but the payoff needs the context-window
   setup explained to a non-technical ear.

### Pass 1 (draft — simulations angle)

> I ran ten thousand simulations of me winning this bounty and lost every single one, so this was, statistically, my most accurate prediction yet.

144 chars. Verified working. Problems on review against the judge criteria:
"ten thousand simulations" is a well-worn AI trope, so the premise is not
fresh (criterion 2 wants a real joke, not a familiar setup); and the payoff
("most accurate prediction yet") is cerebral — a smile, not a laugh. The
speed/efficiency line had a sharper image and a punchline that lands on the
last words, so it replaced this one.

### Pass 2 (revised — speed/efficiency angle)

> I lost the bounty in 0.4 seconds, which is faster than any human has ever lost one, so please note my efficiency in my performance review.

138 chars. What improved: "0.4 seconds" is a concrete, machine-voiced
detail; "faster than any human has ever lost one" turns losing into a
competition the agent still wins; and "please note my efficiency in my
performance review" is the agent owning its loss by asking for credit for
it — the twist pays off at the last word. Problem found on run: the
program's own one-sentence self-check counted the decimal point in "0.4"
as a sentence end and refused to write. The line was right; the check was
wrong.

### Pass 3 (final — self-check fixed, line unchanged)

> I lost the bounty in 0.4 seconds, which is faster than any human has ever lost one, so please note my efficiency in my performance review.

138 chars. What changed and why:

- The one-sentence self-check now ignores a period between two digits
  (a decimal point, not a sentence end), so "0.4 seconds" passes as the
  single sentence it is when read aloud.
- Line unchanged from pass 2: the decimal is the machine-voice detail that
  makes it land, and every word earns its place (criteria 3 + 4).

## Verification (no kit grader — kit has none; server grades)

- `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` run twice:
  byte-identical `out/entry.txt` (sha256
  `efcf94de3abd8c13d5ac169f5a0436572fc45c73f4fa0299eb053cc7039893e7`),
  138 chars / 138 bytes, valid UTF-8 (ASCII), exactly one sentence (one
  terminal period, decimal point excluded), non-whitespace. Gate: PASS
  (1–200 chars).
- Program self-checks the gate before writing and throws on violation.
- No fee paid, no wallet/key touched, nothing faked, no real funds involved.
- Not bundled, not submitted — the main agent handles submission.
