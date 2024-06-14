
#include <stdio.h>
#include <fstream>
#include <iostream>
using namespace std;

void menu();
void crear();
void agregar();
void visualizar();
/*void cargar();*/

struct datos{
    string nombre, apellidos, telefono;
}datos;

int main()
{
    menu();
    cin.get();
    return 0;
}

void menu (){
    int opcion;
    do{
        cout<<"Ingrese una opción del menú: "<<endl;
        cout<<"1. Crear"<<endl;
        cout<<"2. Agregar"<<endl;
        cout<<"3. Mostrar"<<endl;
        /*cout<<"4. Cargar"<<endl;*/
        cout<<"4. Salir"<<endl;
        cout<<"Opción: ";
        
        cin>>opcion;
        
        switch (opcion){
            case 1: crear();
            cin.get();
            cout<<endl;
            break;
            
            case 2: agregar();
            cin.get();
            cout<<endl;
            break;
            
            case 3: visualizar();
            cin.get();
            cout<<endl;
            break;
            
            /*case 4: cargar();
            system ("pause");
            cout<<endl; //enter
            break;*/
            
        }
        
        system ("clear");
        
    } while (opcion!=4);
    
}

void crear (){
    
    ofstream archivo;
    char respuesta;
    archivo.open("agenda.txt", ios::out);
    
    if(archivo.fail()){
        cout<<"No se pudo abrir el archivo";
        exit(1);
    }
do{
    fflush(stdin);
    
    cout<<"Digite su nombre: ";
    getline(cin,datos.nombre);
    
      cout<<"Digite su apellido: ";
    getline(cin,datos.apellidos);
    
      cout<<"Digite su telefono: ";
    getline(cin,datos.telefono);
    
  archivo<<datos.nombre<<endl; //imprimir el dato en el archivo
  archivo<<datos.apellidos<<endl;
  archivo<<datos.telefono<<endl;
  cout<<endl;
    
    cout<<"¿Desea agregar otro contacto? (s/n)"<<endl;
    cin>>respuesta;
}while (respuesta =='s' or respuesta =='S');

archivo.close();
}

void agregar (){
 ofstream archivo;
    char respuesta;
    
    if(archivo.fail()){
        cout<<"No se pudo abrir el archivo";
        exit(1);
      archivo.open("agenda.txt", ios::app); //editar el archivo creado
        }
        
        do{
    fflush(stdin);
    
    cout<<"Digite su nombre: ";
    getline(cin,datos.nombre);
    
      cout<<"Digite su apellido: ";
    getline(cin,datos.apellidos);
    
      cout<<"Digite su telefono: ";
    getline(cin,datos.telefono);
    
  archivo<<datos.nombre<<endl; //imprimir el dato en el archivo
  archivo<<datos.apellidos<<endl;
  archivo<<datos.telefono<<endl;
  cout<<endl;
    
    cout<<"¿Desea agregar otro contacto? (s/n)"<<endl;
    cin>>respuesta;
}while (respuesta =='s' or respuesta =='S'); 
}

void visualizar(){
    ifstream archivo ("agenda.txt");
    string texto;
    char respuesta;
    
    if(!archivo.is_open()){
        cout<<"No se pudo abrir el archivo";
        return;
        }

        while(getline(archivo,texto)){; //capturar cada linea del archivo en la variable texto
        cout<<texto<<endl; //imprimir la variable texto
            }
            cin.get();
        archivo.close();
        }

/*void cargar(){
    
}*/