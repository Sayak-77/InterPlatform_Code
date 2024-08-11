<?php
function countCharacterFrequency($string) {
    $frequency = [];

    for ($i = 0; $i < strlen($string); $i++) {
        $char = $string[$i];

        if (isset($frequency[$char])) {
            $frequency[$char]++;
        } else {
            $frequency[$char] = 1;
        }
    }
    return $frequency;
}

$string = "machine learning";
$frequencies = countCharacterFrequency($string);

foreach ($frequencies as $char => $count) {
    echo "Character '$char' appears $count times.\n";
}
?>
