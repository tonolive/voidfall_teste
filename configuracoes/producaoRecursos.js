export const producaoRecurso = function(nivel, recurso = "alimento/energia/material/ciencia"){

    if(recurso ==! "credito"){
        switch (nivel) {
            case 0:
                return 0;

            case 1:
                return 1;

            case 2:
                return 1;

            case 3:
                return 2;

            case 4:
                return 3;

            case 5:
                return 3;

            case 6:
                return 4;

            case 7:
                return 4;

            case 8:
                return 5;

            case 9:
                return 6;

            case 10:
                return 8;

            case 11:
                return 10;

            case 12:
                return 12;

            case 13:
                return 15;

            default:
                break;
        }
    }else{
        switch (nivel) {
            case 0:
                return 0;

            case 1:
                return 1;

            case 2:
                return 1;

            case 3:
                return 1;

            case 4:
                return 2;

            case 5:
                return 2;

            case 6:
                return 3;

            case 7:
                return 3;

            case 8:
                return 3;

            case 9:
                return 4;

            case 10:
                return 4;

            case 11:
                return 5;

            case 12:
                return 6;

            case 13:
                return 8;

            default:
                break ;
        }
    }
}