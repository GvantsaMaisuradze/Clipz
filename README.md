# Clipz 🚀

## Development server

 🚀 Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Clipz 🎮🕹️
A website for saving gaming highlights and best shots by gamers 🎮🕹️
Things used in this project:

Angular 13.3.0.
WebAssembly using FFmpeg (For making the processor generates thumbnails from your uploaded clip)
Firbase (Authentication, Firestore, storage)
Advanced RxJs operators (combineLatest, forkJoin, switchMap)
Advanced Routing Techniques (Resolvers, Interceptors, Guards, Lazy Loading)
Reactive Forms Validation including (Async Validators, Input Masking)
SharedArrayBuffer (that makes shared storage between Main thread & Web worker)
Infinite Scroll (Manually Built)
VideoJs (For creating nice video player)
Tailwind CSS
This Application (Clipz) has the following pages:

Home page contains the latest uploaded clips from users, Authentication Modal
Clip details page
About Page
After getting authenticated you will be able to visit:
Manage page to control your uploaded clips (Edit, Delete, Sort)
Upload page for uploading your clip then selecting your thumbnail, clip title
404 Page in case of trying to access unregistered route.
