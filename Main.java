public class Main {

    public static void main(String[] args) {
        Coche miCoche = new Coche();
        miCoche.IncrementarPuerta();
        System.out.println(miCoche.puertas);

        int resultado = 0;
        resultado = suma(15, 7, 22);
        System.out.println(resultado);
    }

    public static int suma(int a, int b, int c) {
        return a + b + c;
    }
}

class Coche {
    public int puertas = 4;

    public void IncrementarPuerta() {
        this.puertas++;
    }
}
