const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = [];

function solution (input) {
        const N = +input[0];
        input = input.slice(1);
        const tree = {};
        for (let i = 0; i < N; i++) {
            const [node, left, right] = input[i].split(" ");
            tree[node] = [left, right];
        };
    
        let result = "";
    
        function rootStart (node) {
            if (node === ".") {return;};
            const [lt, rt] = tree[node];
            result += node;
            rootStart(lt);
            rootStart(rt);
        };
    
        function leftStart (node) {
            if (node === ".") {return;};
            const [lt, rt] = tree[node];
            leftStart(lt);
            result += node;
            leftStart(rt);
        };
    
        function rightStart (node) {
            if (node === ".") {return;};
            const [lt, rt] = tree[node];
            rightStart(lt);
            rightStart(rt);
            result += node;
        };
    
        rootStart("A");
        result += "\n";
        leftStart("A");
        result += "\n";
        rightStart("A");
    
        return result;
    };

rl.on("line", (input) => {
    sum.push(input);
})

rl.on("close", () => {
    console.log(solution(sum));
    process.exit();
})