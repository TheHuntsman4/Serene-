import java.util.Scanner;

public class menu {
    static class Request {
        public String request;
        public int numberOfTokens; 
    
        Request() {
            this.request = "tell me about yourself";
        }
        Request(String request) {
            this.request = request;
        }
        Request(String request, int numberOfTokens) {
            this.request = request;
            this.numberOfTokens = numberOfTokens;
        }        
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Select a request:");
            System.out.println("1. Default Request");
            System.out.println("2. Custom Request");
            System.out.println("3. Custom Request with number of tokens");
            System.out.println("4. Exit");
            System.out.print("Enter your choice (1/2/3/4): ");

            int choice = scanner.nextInt();
            scanner.nextLine(); 

            String request;
            int numberOfTokens;

            switch (choice) {
                case 1:
                    Request defaultRequest = new Request();
                    request = defaultRequest.request;
                    break;
                case 2:
                    System.out.print("Enter your custom request: ");
                    request = scanner.nextLine();
                    Request customRequest = new Request(request);
                    break;
                case 3:
                    System.out.print("Enter your custom request: ");
                    request = scanner.nextLine();
                    System.out.print("Enter the number of tokens: ");
                    numberOfTokens = scanner.nextInt();
                    Request customRequestWithTokens = new Request(request, numberOfTokens);
                    break;
                case 4:
                    System.out.println("Exiting...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice!");
                    continue;
            }

            System.out.println("Final String: " + request);
        }
    }
}
