import java.util.*;
class slab_1
{
    public double calculateBill(double bill){
        double b,c;
        if(bill<=50)
        {
            b=(0.5*bill);
        }
        else if((bill>50)&&(bill<=150))
        {
            b=(50*0.5)+((bill-50)*0.75);
        }
        else if((bill>150)&&(bill<=250))
        {
            b=(50*0.5)+(100*0.75)+((bill-150)*1.2);
        }
        else 
        {
            b=(50*0.5)+(100*0.75)+(100*1.2)+((bill-250)*1.5);
        }
        
        c = ((20*b)/100)+b;
        return c;
    }
    public static void main(String args[])
    {
        slab_1 obj = new slab_1();
        double result = obj.calculateBill(105.76);
        String preciseResult = String.format("%.2f", result);
        System.out.println("INR "+preciseResult+" is your total bill");
    }
}