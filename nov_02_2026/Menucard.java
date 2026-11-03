package nov_02_2026;

import java.util.Scanner;

public class Menucard {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        do{
            System.out.println("1. Idly");
            System.out.println("2. Dosa");
            System.out.println("3. Pongal");
            System.out.println("4. Coffee");
            System.out.println("5. Juice");
            System.out.println("6. Exit");
            System.out.println("Enter your choice: ");
            int choice = scan.nextInt();
            if (choice == 1)
                    System.out.println("Idly");
            else if (choice >2 && choice <5)
                    System.out.println("Dosa");
            else if (choice == 3)
                    System.out.println("Pongal");
            else if (choice == 4)
                    System.out.println("Coffee");    
            else if (choice == 5)
                    System.out.println("Juice");
            else if (choice == 6)
                    return ;
            else
                    System.out.println("Invalid choice");
        }while(true);
    }
}
