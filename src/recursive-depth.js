module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let result = 1
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result = Math.max(this.calculateDepth(arr[i]) + 1, result)
            }
        }
        return result
    }
}