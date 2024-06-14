
public class MyProgram {

    public static void main (String[] args) {
        
        Coche coche1 = new Coche(); //Invoca el constructor
        System.out.println("Velocidad del coche 1: "+coche1.VelocidadActual);
        System.out.println("El numero de puertas del coche 1 es: " + coche1.NumeroPuertas);
            coche1.acelerar();
        System.out.println("Velocidad acelerada del coche 1: "+ coche1.VelocidadActual);

        Coche coche2 = new Coche ();
        System.out.println("El numero de puertas del coche 2 es: " + coche2.NumeroPuertas);
        System.out.println("Velocidad del coche 2: " +coche2.VelocidadActual); }
    

    static class Coche {
        
        
        int NumeroPuertas;
        int VelocidadMaxima;
        float VelocidadActual;

        public Coche(){ //Constructor, inicializar variables
            NumeroPuertas=5;
        }
            public void acelerar(){
                VelocidadActual+=15.0;
            }
}}

