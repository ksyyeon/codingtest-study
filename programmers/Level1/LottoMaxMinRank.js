// 로또의 최고순위와 최저순위 구하기
function solution(lottos, win_nums) {
    var answer = [];
    
    const rank = [6,6,5,4,3,2,1];
    
    var correct = lottos.filter(num => win_nums.includes(num)).length;
    console.log(correct);
    
    var zero = lottos.filter(num => num === 0).length;
    console.log(zero)
    
    var max = rank[correct+zero];
    var min = rank[correct];
    
    answer = [max, min]
    return answer;
}
