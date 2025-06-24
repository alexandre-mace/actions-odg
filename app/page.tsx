import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClimateChart } from "@/components/climate-chart"
import { individualActions, nationalActions } from "@/lib/climate-data"
import { Leaf, Globe, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-2">
          Actions Climat : Visualisation des Impacts
        </h1>
        <p className="text-lg text-gray-600">
          Découvrez l'impact des actions climatiques aux échelles individuelle et nationale
        </p>
      </div>

      <Tabs defaultValue="individual" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8 h-14">
          <TabsTrigger value="individual" className="flex items-center gap-2 text-base py-3">
            <Leaf className="w-5 h-5" />
            Échelle individuelle
          </TabsTrigger>
          <TabsTrigger value="national" className="flex items-center gap-2 text-base py-3">
            <Globe className="w-5 h-5" />
            Échelle nationale
          </TabsTrigger>
        </TabsList>

        <TabsContent value="individual">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                Actions individuelles pour le climat
              </CardTitle>
              <CardDescription>
                Impact des gestes quotidiens sur vos émissions de CO₂ (tonnes par an)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ClimateChart 
                data={individualActions}
                title="Top 10 des actions individuelles les plus impactantes"
                color="#16a34a"
              />
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>💡 Le saviez-vous ?</strong> Un Français émet en moyenne 9 tonnes de CO₂ par an. 
                  En combinant ces actions, vous pourriez réduire vos émissions de plus de 50% !
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="national">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Actions nationales pour le climat
              </CardTitle>
              <CardDescription>
                Impact des politiques publiques sur les émissions nationales (millions de tonnes CO₂ par an)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ClimateChart 
                data={nationalActions}
                title="Top 10 des actions nationales les plus impactantes"
                color="#2563eb"
              />
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>🏛️ Contexte :</strong> La France émet environ 400 millions de tonnes de CO₂ par an. 
                  Ces mesures structurelles pourraient réduire nos émissions nationales de plus de 60% !
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Sources des données</h3>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a 
            href="https://www.ademe.fr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
          >
            ADEME <ExternalLink className="w-3 h-3" />
          </a>
          <a 
            href="https://www.ipcc.ch/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
          >
            GIEC <ExternalLink className="w-3 h-3" />
          </a>
          <a 
            href="https://www.carbone4.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
          >
            Carbone 4 <ExternalLink className="w-3 h-3" />
          </a>
          <a 
            href="https://nosgestesclimat.fr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
          >
            Nos Gestes Climat <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Données compilées et adaptées à partir des études officielles
        </p>
      </div>
    </main>
  )
}
