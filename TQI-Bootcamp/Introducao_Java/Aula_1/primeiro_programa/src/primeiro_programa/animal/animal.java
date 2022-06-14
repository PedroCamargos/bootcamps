package primeiro_programa.animal;

import java.util.Objects;

public class animal {
	private String nome;
	private String cor;
	private Integer idade;
	private String tipo;

	public animal(String nome, String cor, Integer idade, String tipo) {
		this.nome = nome;
		this.cor = cor;
		this.idade = idade;
		this.tipo = tipo;
	}
	
	public animal() {
		
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	public Integer getIdade() {
		return idade;
	}

	public void setIdade(Integer idade) {
		this.idade = idade;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	@Override
	public int hashCode() {
		return Objects.hash(cor, idade, nome, tipo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		animal other = (animal) obj;
		return Objects.equals(cor, other.cor) && Objects.equals(idade, other.idade) && Objects.equals(nome, other.nome)
				&& Objects.equals(tipo, other.tipo);
	}

	@Override
	public String toString() {
		return "animal [nome=" + nome + ", cor=" + cor + ", idade=" + idade + ", tipo=" + tipo + "]";
	}

}
