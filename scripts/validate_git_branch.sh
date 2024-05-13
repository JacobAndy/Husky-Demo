#!bin/bash
PROTECTED_BRANCHES=("master" "main-test")
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

for protected_branch in "${PROTECTED_BRANCHES[@]}"; do
    if [[ "${branch}" == $protected_branch ]]; then
        echo "😵 😱 Uh Oh! 😱 😵 "
        echo "You cannot commit changes directly to remote branch:${protected_branch}"
        echo "😵 😱 Uh Oh! 😱 😵 "
        exit 1
    fi
done
echo "✅  GIT branch validated."
exit 0
