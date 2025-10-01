# QA Checklist

Use this checklist to verify the Blood Optimization Platform after applying changes.

- [ ] Load the application and confirm no errors appear in the browser console.
- [ ] Navigate to each sidebar panel; ensure all panels render without errors or missing data.
- [ ] Open the Specifications panel, paginate through results, perform a delete action, and verify the expected row is removed.
- [ ] Reload the application; confirm previously saved data and counts appear and the “Last saved” text updates after a write operation.
- [ ] Intentionally trigger a failure (e.g., tamper with local storage) and confirm the initialization error banner appears and can be dismissed.
