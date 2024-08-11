<?php
function factorial($n) {
    if ($n < 0) {
        return "Invalid input";  
    }

    if ($n == 0 || $n == 1) {
        return 1;  
    }
    return $n * factorial($n - 1);  
}

$num1 = 5;
$num2 = 7;
echo "The factorial of $num1 is " . factorial($num1) . ".\n";
echo "The factorial of $num2 is " . factorial($num2) . ".";
?>
