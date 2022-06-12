const receivesAFunction = (cb) => {
    return cb()
}


const returnsANamedFunction = () => (
    function named(){}
)


function returnsAnAnonymousFunction(){
    return function(){
        return 0
    }
}