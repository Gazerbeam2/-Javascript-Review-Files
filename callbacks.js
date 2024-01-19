function loadScript(src){
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => cancelIdleCallback(script);

    document.head.append(script);
}

loadScript

let promise = new Promise(function(resolve, reject){
    // executor (the producing code, "singer")
});
