define('helloRequire', 
function() {
        var hello = function() {
                return "Hello From Requirejs";
        };
        return {hello: hello}
});
