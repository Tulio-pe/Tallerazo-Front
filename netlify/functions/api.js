import { readFileSync } from 'fs';
import { join } from 'path';

export async function handler(event) {
  try {
    // Leer el archivo db.json
    const dbPath = join(process.cwd(), 'db.json');
    const data = JSON.parse(readFileSync(dbPath, 'utf8'));

    // Extraer la ruta de la solicitud
    const path = event.path.replace(/^\/\.netlify\/functions\/api/, '');

    // Ejemplo simple: si la ruta es /workshops, devolver los workshops
    if (path === '/workshops' || path === '/workshops/') {
      return {
        statusCode: 200,
        body: JSON.stringify(data.workshops || [])
      };
    }

    // Ruta por defecto
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Ruta no encontrada' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
