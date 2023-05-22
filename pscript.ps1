$t_file = @()
$l_file = @()
Foreach ($file in (git diff --name-only head~ head))
{
    if ($file -match '__tests__') {
        $t_file += $file
    }
    else {
        $l_file += $file
    }
}

npm test -- --findRelatedTests $t_file --collectCoverageFrom $l_file