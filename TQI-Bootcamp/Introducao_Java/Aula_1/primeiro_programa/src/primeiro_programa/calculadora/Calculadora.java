package primeiro_programa.calculadora;
import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		float a, b;
		
		System.out.println("Digite o primeiro valor: ");
		a = scan.nextInt();
		
		System.out.println("Digite o segundo valor: ");
		b = scan.nextInt();
		
		float soma = soma(a, b);
		float subtracao = subtracao(a, b);
		float multiplicacao = multiplicacao(a, b);
		float divisao = divisao(a, b);
		
		System.out.println("A soma dos valores �: " + soma);
		
		System.out.println("A subtra��o dos valores �: " + subtracao);
		
		System.out.println("A multiplica��o dos valores �: " + multiplicacao);
		
		System.out.println("A divis�o dos valores �: " + divisao);
		
	}
	
	public static float soma(float a, float b) {
		return a + b;
	}
	
	public static float subtracao(float a, float b) {
		return a - b;
	}
	
	public static float multiplicacao(float a, float b) {
		return a * b;
	}	
	
	public static float divisao(float a, float b) {
		return a / b;
	}	
	
}	
