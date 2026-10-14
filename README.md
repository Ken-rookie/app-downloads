# Ken-rookie App Downloads

A responsive download page for TokaToka, 3Kings Reservation, RANKR, and Baryo Bites. Each button links directly to the APK asset in its verified GitHub release.

## Run

Serve this folder over HTTP, then open `http://localhost:8000`:

```sh
python -m http.server 8000
```

No build step, API request, or GitHub token is needed. Update the corresponding download URL and version in `app-downloads.js` when publishing a newer release.