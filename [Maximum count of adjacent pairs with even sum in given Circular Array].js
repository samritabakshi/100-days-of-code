function max_sum(){
    let last = arr.Length - 1;
    let front = 0;
    let count = 0;
    if ((arr[front] + arr[last]) % 2 == 0){
        front++;
        last--;
        count++;
    }
    else if ((arr[front] + arr[front + 1]) % 2 == 0){
    front += 2;
    count++;
    }

    for (let i = front; i <= last; i++)
    {
        if (i + 1 <= last && (arr[i] + arr[i + 1]) % 2 == 0)
        {
            i++;
            count++;
        }
    }

    return count;
}


