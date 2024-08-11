public class fibonacci {
    public static void main(String[] args) {
        int n = 10; 
        int[] fibSeries = new int[n];
        generateFibonacciSeries(n, fibSeries);
        printArray(fibSeries);
    }

    public static void generateFibonacciSeries(int n, int[] fibSeries) {
        if (n > 0) fibSeries[0] = 0;
        if (n > 1) fibSeries[1] = 1;
        for (int i = 2; i < n; i++) {
            fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
        }
    }

    public static void printArray(int[] array) {
        System.out.print("Fibonacci Series: ");
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
