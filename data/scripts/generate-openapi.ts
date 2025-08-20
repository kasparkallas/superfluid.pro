import { writeFileSync } from "node:fs"
import { join } from "node:path"
import { generateOpenApiDocument } from "../lib/api/registry"

function generateOpenApiSpec() {
	const spec = generateOpenApiDocument()
	const outputPath = join(process.cwd(), "public/openapi.json")

	writeFileSync(outputPath, JSON.stringify(spec, null, 2))
	console.log(`✅ OpenAPI 3.1 spec generated at ${outputPath}`)
}

generateOpenApiSpec()
