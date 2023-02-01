/// Node.js global objects are global in nature and they are available in all modules.
/// We do not need to include these objects in our application, rather we can use them directly.
/// These objects are modules, functions, strings and object itself as explained below.
/// some global objects-
/// 1) __dirname
/// 2)__filename
/// 3) console
/// 4) process
/// 5) setTimeout(cb, ms)
/// 6) clearTimeout(t)
/// 7) setInterval(cb, ms)

console.log(__dirname);
console.log(__filename);

// console.log(process);

setInterval(() => {
    console.log("pratik aman");
}, 1000);
