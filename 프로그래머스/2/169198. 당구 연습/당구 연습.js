function solution(m, n, startX, startY, balls) 
{
    const answer = [];
    const d = [[startX, 2*n-startY], [startX, -startY], [-startX, startY], [2*m-startX, startY]];
    
    for(let i=0; i<balls.length; i++)
    {
        let maxValue = Number.MAX_VALUE;
        
        for(let j=0; j<4; j++)
        {
            const [newX, newY] = d[j];
            if(newX === balls[i][0])
            {
                const maxY = Math.max(startY, newY);
                const minY = Math.min(startY, newY);
                if(minY < balls[i][1] && balls[i][1] < maxY)
                    continue;
            }
            if(newY === balls[i][1])
            {
                const maxX = Math.max(startX, newX);
                const minX = Math.min(startX, newX);
                if(minX < balls[i][0] && balls[i][0] < maxX)
                    continue;
            }
            
            const tmp = (newX - balls[i][0]) **2 + (newY - balls[i][1]) **2;
            maxValue = Math.min(maxValue, tmp);
        }
        
        answer.push(maxValue);
    }
    
    return answer;
}