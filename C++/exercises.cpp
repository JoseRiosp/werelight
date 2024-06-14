
#include <stdio.h>
#include <iostream>
using namespace std;
/*
int main() {

int gasto;

    std::cout << "Ingrese el gasto en kwh" << std::endl;
cin >> gasto;
    double tarifa=0;
    
    if (gasto < 1000) {tarifa=1.2;
cout <<"La tarifa es:" << tarifa<<endl;
    }
    

    else if (gasto >= 1000 and gasto <=1850) {tarifa =1.0;
cout << "La tarifa es:" << tarifa<<endl;}

   else if (gasto > 1850) {tarifa =0.9;
cout << "La tarifa es:" << tarifa<<endl;}

    return 0;
}

int main() {
    
    int entero=0;
    int residuo=0;
    cout << "Ingrese el número:" << std::endl;
    cin >> entero;
    
    residuo=entero/2;
    
    if (residuo=int) {
        cout << "El número es par" <<endl;}
        
        else if (!residuo=int) {
            cout << "El número es impar" <<endl;}
            
        
    
     return 0; 
}

//and &&
// or ||

/*int main() {
    
    char letra;
    cout <<"Ingrese una letra:"<<endl;
    cin >> letra;
    
    switch (letra) {
    
    case 'a': cout <<"Es una vocal a"<<endl; break;
    case 'e': cout <<"Es una vocal e"<<endl; break;
    case 'i': cout <<"Es una vocal i"<<endl; break;
    case 'o': cout <<"Es una vocal o"<<endl; break;
    case 'u': cout <<"Es una vocal u"<<endl; break; 
    default: cout<<"No es una vocal"<<endl;
     
    }
    
      return 0;
} 

int main() {

double kg;
    cout <<"Ingrese medida en kg:"<<endl;
    cin >> kg;
    
char opcion;
    
     cout <<"Ingrese opción de conversión: miligramos (m) ó gramos (g) "<<endl;
    cin >> opcion;
    
    double mconversion = 0;
    double gconversion= 0;
    
    mconversion= kg * 1000000;
    gconversion= kg * 1000;
    
    switch (opcion) {
    
    case 'm': cout <<"La conversión es: "<<mconversion<<endl; break;
    case 'g': cout <<"La conversión es: "<<gconversion<<endl; break;
    
    default: cout<<"No escogió una opción válida"<<endl;}
    
      return 0;
} 

int main(){
    
    int x;
    int y;
    int mayor;

    cout<<"Ingrese un número: "<<endl;
    cin>>x;
    cout<<"ingrese otro número: "<<endl;
    cin>>y;
    
xd=encontrarMax (int x, int y);

    cout<<"El número máximo es: "<<xd<<endl;
    
    return 0;
    
}

int encontrarMax(int, int);

int encontrarMax (int x, int y){

    int maximo=0;

    if (x>y) {
        maximo =x;
    } else {
        maximo=y;
    }
    return maximo;

}*/

int main() {

float meta =0.0;
float donacion=0.0;
float totaldonaciones=0.0;
bool metaalcanzada=false;

cout<<"Ingrese el valor que quiere alcanzar:";cin>>meta;

 while (!metaalcanzada) // ! es not (negacion)
                         // !/ es diferente
 {
    cout<<"Ingrese el valor de la donación:";cin>>donacion;
    totaldonaciones=totaldonaciones+donacion;
   //totaldonaciones+=donacion; - alternativo

    if(totaldonaciones>=meta) {
        metaalcanzada=true;
        cout<<"Se alcanzó la meta esperada"<<endl;
    }
 }

return 0;
}

/*
Java code

public static int suma (int a, int b){

    int resultado = a + b;
    cout<<resultado<<endl;
    return suma (a, resultado); // Bucle infinit, función llamando una función

}

Hacer un calvac

sinvariable=suma; // Poner una función en una variable
sinvariable(); // Esta es la función suma que ahora se llama sinvariable

void nombre(char *h, char*f);
int main() {
    char a='F';
    char b='V';

    cout<< "valores normales, a="<<a<< " y b="<<b<<endl;

    nombre(&a, &b);

    cout<<"valores alterados, a="<<a<<" y b="<<b<<endl;
    return 0;

}
void nombre(char *h, char *f) {
    *h='V';
    *f='F';

}

// Clases

class Coche 
{ public:

    int NumeroPuertas;
    int VelocidadMaxima;
    float VelocidadActual=0;

    float acelerar(){
        VelocidadActual+=15;
        return VelocidadActual;

    }
};

int main (){
        Coche coche;
        cout<<"Velocidad Actual es: "<<coche.VelocidadActual<<endl;
        coche.acelerar();
        cout<<"Velocidad después de aceleración es: "<<coche.VelocidadActual<<endl;
return 0;
    } */