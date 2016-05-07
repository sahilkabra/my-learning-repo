import java.util.Arrays;

class P {


    public int solve(int [] A, int [] B) {
        int result = 0;
        double [] C = new double[A.length];
        int count = 0;
        if (A.length > 1) {
            //do this only if length is greater than 1
            for (int index = 0; index < A.length; index++) {
                C[index] = A[index] + (B[index] / 1000000.00);
            }

            int left = 0;
            int right = C.length - 1;

            while (left < right) {
                if (C[left] <= 1) left++; //no need to check any value less than 0
                else {
                    if (C[left] * C[right] >= C[left] + C[right]) {
                        count += (right - left);
                        right--;
                    } else left++;
                }
            }
        }

        return result;
    }
}

class Q {
    public int solve(int [] A) {
        int minSum = Integer.MAX_VALUE;
        int [] prefixSum = new int[A.length];
        prefixSum[0] = A[0];
        for (int index = 1; index < A.length; index++) {
            prefixSum[index] = A[index] + prefixSum[index - 1];
        }
        Arrays.sort(prefixSum);

        for (int index = 1; index < prefixSum.length; index++ ) {
            int currDiff = Math.abs(prefixSum[index - 1] - prefixSum[index]);
            if (currDiff < minSum) minSum = currDiff;
        }
        return Math.abs(minSum);
    }
}

public class Solution {
    public static void main(String [] args) {
        int [] A = {2, -4, 6,-3,9};
        //System.out.println(new Q().solve(A));
        int [] b = {0, 1, 2, 2, 3, 5};
        int [] c = {500000, 500000, 0, 0, 0, 20000};
        System.out.println(new P().solve(b, c));
    }
}
