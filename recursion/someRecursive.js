const someRecursive = (arr, cb) => {
    if (arr.length === 0) { return false } else if (cb(arr[0])) { return true } else { return someRecursive(arr.slice(1), cb) }
}

const someRecursive = (arr, cb) => arr.length === 0 ? false : cb(arr[0]) ? true : someRecursive(arr.slice(1), cb)