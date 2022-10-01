screen = document.getElementById('screen');

let currentScreen = '';
let factorial = 1;

function addingToScreen(calculatorInput){
    
    if(calculatorInput == 'x'){
        currentScreen += '*'
    }
    else if(calculatorInput == 'C'){
        currentScreen = ""
        screen.value = ""
    }
    else if(calculatorInput == 'nCr'){
        currentScreen += 'C'
    }
    else if(calculatorInput == 'nPr'){
        currentScreen += 'P'
    }
    else if(calculatorInput == '!'){
        if(screen.value == 0){
        }
        else{
            for (i = 1; i <= screen.value; i++) {
                factorial *= i;
            }
        }
        currentScreen+='!'
    } 
    else if (calculatorInput == '=') {
        if(currentScreen.includes('!')){
            currentScreen = factorial
        }
        else if(currentScreen.includes('C')){
            var ncr = currentScreen;
            var ncrParts = ncr.split('C');
            if(ncrParts[0]<ncrParts[1]){
                currentScreen = "Ensure n ≥ r"
            }
            else
            currentScreen = computingCombination(ncrParts[0],ncrParts[1])    
        }
        else if(currentScreen.includes('P')){
            var npr = currentScreen;
            var nprParts = npr.split('P');
            
            currentScreen = computingPermutation(nprParts[0],nprParts[1])   
            if(nprParts[0]<nprParts[1]){
                currentScreen = "Ensure n ≥ r"
            } 
        }
        else{
            currentScreen = eval(currentScreen);
        }    
    }
    else{
        currentScreen += calculatorInput
    }

    screen.value = currentScreen
}

function computeFactorial(val){
    
    let answer = 1
    
    if(screen.value == 0){
    }
    else{
        for (i = 1; i <= val; i++) {
            answer *= i;
        }
    }

    return answer
}

function computingCombination(n,r){
    
    if (n==r || r==0) 
    {
      return 1;
    } 
    else 
    {
        let n1 = computeFactorial(n)
        let r1 = computeFactorial(r)
        let x = computeFactorial(n-r)
    
        return n1/(r1*x)
    }
}

function computingPermutation(n,r){
    let n1 = computeFactorial(n)
    let x = computeFactorial(n-r)

    return n1/x
}