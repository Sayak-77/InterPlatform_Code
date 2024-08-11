<?php
function Isperfect($number) {
    if ($number < 1) {
        return false;
    }

    $sum = 0;
    for ($i = 1; $i <= $number / 2; $i++) {
        if ($number % $i == 0) {
            $sum += $i;
        }
    }
    return $sum == $number;
}

$number1 = 28;
$number2 = 64;
if (Isperfect($number1)) {
    echo "$number1 is a perfect number.";
} else {
    echo "$number1 is not a perfect number.";
}
if (Isperfect($number2)) {
    echo "\n$number2 is a perfect number.";
} else {
    echo "\n$number2 is not a perfect number.";
}
?>
