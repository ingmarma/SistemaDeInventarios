package marma.inventarios.servicio;

import marma.inventarios.modelo.Producto;

import java.util.List;

public interface IProductoServicio {
    public List<Producto> listarProductos();

    public Producto buscarProductoporId(Integer idProducto);

    public Producto guardarProducto (Producto producto);

    public void eliminarProductoPorId(Integer idProducto);


}
