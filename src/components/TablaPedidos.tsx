
interface Pedido {
  id:string,
  cliente:string,
  total:number,
  estado: 'Entregado' | 'Pendiente' | 'Cancelado'
}

const TablaPedidos = () => {
  const pedidos: Pedido[] = [ { id: "#ORD-772", cliente: "Maria Casals", total: 125.50, estado: 'Entregado' }, { id: "#ORD-891", cliente: "Juan Topo", total: 45.00, estado: 'Pendiente' }, { id: "#ORD-902", cliente: "Sara Vega", total: 210.99, estado: 'Entregado' }, { id: "#ORD-115", cliente: "Pedro Picapiedra", total: 89.00, estado: 'Cancelado' }, ];
  return (
    <table className="border-collapse">
      <thead>
        <tr>
          <th>Id</th>
          <th>Cliente</th>
          <th>Total</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>{pedidos[0].id}</td>
          <td>{pedidos[0].cliente}</td>
          <td>{pedidos[0].total}</td>
          <td className={pedidos[0].estado === 'Entregado' ? 'bg-green-100' : pedidos[0].estado === 'Pendiente' ? 'bg-yellow-100' : 'bg-red-100'}>{pedidos[0].estado}</td>
        </tr>
        <tr>
          <td>{pedidos[1].id}</td>
          <td>{pedidos[1].cliente}</td>
          <td>{pedidos[1].total}</td>
          <td className={pedidos[1].estado === 'Entregado' ? 'bg-green-100' : pedidos[1].estado === 'Pendiente' ? 'bg-yellow-100' : 'bg-red-100'}>{pedidos[1].estado}</td>
        </tr> */}
        {
          pedidos.map(p => (
            <tr>
              <td>{p.id}</td>
              <td>{p.cliente}</td>
              <td>{p.total}</td>
              <td className={`rounded-xl ${p.estado === 'Entregado' ? 'bg-green-100' : p.estado === 'Pendiente' ? 'bg-orange-100' : 'bg-red-100'}`}>{p.estado}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default TablaPedidos