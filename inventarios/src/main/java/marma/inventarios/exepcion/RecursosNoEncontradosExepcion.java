package marma.inventarios.exepcion;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RecursosNoEncontradosExepcion extends RuntimeException{
    public RecursosNoEncontradosExepcion(String mensaje){
        super(mensaje);
    }
}
