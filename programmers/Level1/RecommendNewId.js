// 내 풀이
function solution(new_id) {
    var answer = '';
    
    var answer = new_id
                    .toLowerCase()
                    .replace(/[^a-z0-9\-\.\_]/g, '')
                    .replace(/\.{2,}/g, '.')
                    .replace(/^\.|\.+$/g, '');
    
    if(answer.length === 0) 
        answer = 'a';
    
    if(answer.length > 15)
        answer = answer.substr(0, 15);
    
    answer = answer.replace(/\.+$/g, '');
    
    if(answer.length < 3){
        const str = answer.substr(-1);
        while(answer.length < 3)
            answer += str;
    }
    return answer;
    
}


// 모범 풀이
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
