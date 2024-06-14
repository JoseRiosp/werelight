
public class MyProgram {

    public static void main (String[] args) {
        
        /*Coche coche1 = new Coche(2, 90); //Invoca el constructor normal o el con paramétros (entre paréntesis)
        System.out.println("Velocidad maxima del coche 1: "+coche1.VelocidadMaxima);
        System.out.println("El numero de puertas del coche 1 es: " + coche1.NumeroPuertas);
            coche1.acelerar();
        System.out.println("Velocidad acelerada del coche 1: "+ coche1.VelocidadActual);

        Coche coche2 = new Coche ();
        System.out.println("El numero de puertas del coche 2 es: " + coche2.NumeroPuertas);
        System.out.println("Velocidad máxima del coche 2: " +coche2.VelocidadMaxima); }
    

    static class Coche {
        
        
        int NumeroPuertas;
        int VelocidadMaxima;
        float VelocidadActual;

        public Coche(){ //Constructor normal, inicializar variables
            NumeroPuertas= 5;
            VelocidadMaxima= 120;
            System.out.println("El constructor normal"); }
       
        public Coche(int puertas, int velocidad){
            NumeroPuertas= puertas;
            VelocidadMaxima= velocidad;
            System.out.println("El constructor CON PARAMETROS");
        }
        public void acelerar(){
                VelocidadActual+=15.0;
               
            }   
}
           

        //          PROPIEDAD PRIVADA

    Vehiculo vehiculo= new Vehiculo();

    Vehiculo.setTipo("Coche"); //El setter lo pone en la propiedad tipo
    System.out.println(Vehiculo.getTipo); // Imprimir la salida del getter
}


class Vehiculo {
    private String tipo; //PROPIEDAD PRIVADA, los datos se pasan por el setter

    //Crear un setter
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    //Crear un getter
    public string getTipo(){ // Si es un boolean se usa is (isTipo)
        return this.tipo;
    }
}} */

//      ABSTRACCIÓN

        Coche coche = new Coche();
        coche.velocidadMaxima;

}

    class Vehiculo {
         int velocidadMaxima;
         String matricula;

    }

    class Coche extends Vehiculo {}


}








