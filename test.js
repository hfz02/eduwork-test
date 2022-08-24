// ------------------------ No. 1 ------------------------- 
function factorial(n) {
    if (n <= 0) return 1
    return n * factorial(n - 1)
}

// console.log(factorial(8))


// ------------------------ No. 2 -------------------------
function reverse(word) {
    let letters = []
    let rword = ""
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i])
    }
    for (var i = 0; i < word.length; i++) {
        rword += letters.pop()
    }
    
    console.log('Word: ' + word)
    console.log('Reverse Word: ' + rword)
}

// reverse("abcde")


// ------------------------ No. 3 (Belum selesai) -------------------------
let randChar = '9.86-A5.321'
for (var i = 0; i < randChar.length; i++) {
    // for (var j = 0; j <= i; j++) {
    // }
    console.log(randChar[i])
    if (randChar[i] == "." || randChar[i] == '-' || randChar[i] == 'A') {
        randChar = '9865321'
        // console.log(randChar[i])
    }
}


// ------------------------ No. 4 -------------------------
let a = 3
let b = 7
function swapA() {
    if (a < b) {
        a = b
        return a
    }
}
// function swapB() {
//     if (b == a) {
//         b = 3
//         return b
//     }
// }

console.log(swapA())
// console.log(swapB())


// ------------------------ No. 5 -------------------------
function inputNum(n) {
    if (n < 1 || n > 100) {
        console.log("Silakan masukkan angka 1-100.")
    } else if (n === 4) {
        console.log("empat")
    } else if (n === 20) {
        console.log("dua puluh")
    } else if (n === 39) {
        console.log("tiga puluh sembilan")
    }
}

// console.log(inputNum(39))


// ------------------------ No. 6 -------------------------
let arr1 = [1,4,7,9,12]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 2 || arr1[i] > 15) {
        arr1 = [4,7,9,12]
        // console.log(arr1)
    }
}


// ------------------------ No. 7 -------------------------
let arr2 = [1,4,7,9,12]
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < 2 || arr2[i] > 15) {
        arr2 = [4,7,9,12]
        // console.log(arr2[i])
    }
}


// ------------------------ No. 8 -------------------------
function eduwork(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("EduWork")
        }
    
        if (i % 3 == 0) {
            console.log("Edu")
        } else if (i % 5 == 0) {
            console.log("Work")
        } else {
            console.log(i)
        }
    }
}

// eduwork(15)


// ------------------------ No. 9 -------------------------
function findLowestHighestNum(arr) {
    let lowest = arr[0]
    let highest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        if (temp < lowest) {
            lowest = arr[i]
        }
        if (temp > highest) {
            highest = arr[i]
        }
    }

    console.log('The lowest number is ' + lowest)
    console.log('The highest number is ' + highest)  
}

// findLowestHighestNum([4,2,6,88,3,11])


// ------------------------ No. 10 -------------------------
function tahunKabisat(y) {
    if (y % 4 != 0) {
        return y + " bukan tahun kabisat."
    } else if (y % 400 == 0) {
        return y + " adalah tahun kabisat."
    } else if (y % 100 == 0) {
        return y + " bukan tahun kabisat."
    } else {
        return y + " adalah tahun kabisat."
    }
}

// console.log(tahunKabisat(2021))
// console.log(tahunKabisat(2024))