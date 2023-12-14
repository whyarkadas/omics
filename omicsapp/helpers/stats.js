function stats(gene, data) {
    stat_values = [data.exper_rep1, data.exper_rep2, data.exper_rep3, data.control_rep1, data.control_rep2, data.control_rep3]
    return {
        "gene": gene,
        "mean": mean(stat_values),
        "median": median(stat_values),
        "variance": variance(stat_values)
    }
}

function mean(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}

const variance = (arr = []) => {
    if (!arr.length) {
        return 0;
    };
    const sum = arr.reduce((acc, val) => acc + val);
    const { length: num } = arr;
    const median = sum / num;
    let variance = 0;
    arr.forEach(num => {
        variance += ((num - median) * (num - median));
    });
    variance /= num;
    return variance;
};

function median(arr) {
    const arrSorted = arr.sort((a, b) => a - b);
    return arrSorted.length % 2 === 0 ? (arrSorted[arrSorted.length / 2 - 1] + arrSorted[arrSorted.length / 2]) / 2 : arrSorted[Math.floor(arrSorted.length / 2)];
}

module.exports = stats;