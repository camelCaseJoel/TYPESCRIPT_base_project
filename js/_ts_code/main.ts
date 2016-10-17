import { Dog } from './Dog';

const benito = new Dog( 'Benito', 'Light brown' );
benito.printData();
benito.barkTo( "Arian" );

const rocco = new Dog( 'Rocco', 'Gold' );
rocco.printData();
rocco.barkTo( "Judet" );

const sniffles = new Dog( 'Sniffles', 'White' );
sniffles.printData();
sniffles.barkTo( "Iván" ); 
