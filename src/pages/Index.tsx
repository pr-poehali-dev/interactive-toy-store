import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const toys = [
    {
      id: 1,
      name: "Робот-компаньон Макс",
      price: "12 990 ₽",
      description: "ИИ-помощник с голосовым управлением и обучающими играми",
      image: "/img/5f7455c6-e8e2-4a11-bdfd-136c150061c3.jpg",
      features: ["Распознавание речи", "100+ игр", "Обновления ПО"]
    },
    {
      id: 2,
      name: "Умный мишка Тедди+",
      price: "8 490 ₽", 
      description: "Интерактивная игрушка с эмоциональным ИИ и сказками",
      image: "/img/7ebf3dd6-a775-489a-864e-940559e675a1.jpg",
      features: ["Эмоции в реальном времени", "1000+ сказок", "Связь с родителями"]
    },
    {
      id: 3,
      name: "Дрон-исследователь",
      price: "15 990 ₽",
      description: "Обучающий дрон с ИИ-навигацией для STEM-образования",
      image: "/img/44120de6-72a5-4782-8bb5-8761eb2f492b.jpg",
      features: ["Автономный полёт", "Программирование", "Камера 4K"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Bot" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">AI TOYS STORE</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary border-b-2 border-primary pb-1 font-medium">Главная</a>
            <a href="#catalog" className="text-gray-600 hover:text-primary transition-colors">Каталог</a>
            <a href="#delivery" className="text-gray-600 hover:text-primary transition-colors">Доставка</a>
            <Button variant="outline" size="sm">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Новое поколение игрушек
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Интерактивные игрушки
            <br />
            <span className="text-primary">со встроенным ИИ</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Откройте мир умных игрушек с искусственным интеллектом. 
            Обучение, развлечение и взаимодействие на новом уровне.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4">
              <Icon name="Rocket" size={20} className="mr-2" />
              Посмотреть каталог
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4">
              <Icon name="Play" size={20} className="mr-2" />
              Демо возможностей
            </Button>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Возможности искусственного интеллекта
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Голосовое общение</h3>
              <p className="text-gray-600">Естественные диалоги на русском языке с пониманием контекста и эмоций</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Brain" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Обучение и адаптация</h3>
              <p className="text-gray-600">ИИ изучает предпочтения ребёнка и подстраивает игровой процесс</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gamepad2" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Интерактивные игры</h3>
              <p className="text-gray-600">Развивающие мини-игры с элементами обучения и творчества</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Каталог умных игрушек
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Каждая игрушка оснащена передовым ИИ для максимального развития и веселья
          </p>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {toys.map((toy) => (
              <Card key={toy.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={toy.image} 
                      alt={toy.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary">
                      <Icon name="Zap" size={14} className="mr-1" />
                      ИИ
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{toy.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {toy.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {toy.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{toy.price}</div>
                  <Button className="hover:scale-105 transition-transform">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Доставка и гарантии
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Truck" className="mr-3 text-primary" size={24} />
                    Быстрая доставка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Icon name="Clock" size={16} className="text-green-500 mr-3" />
                      По Москве: 1-2 дня
                    </li>
                    <li className="flex items-center">
                      <Icon name="MapPin" size={16} className="text-green-500 mr-3" />
                      По России: 3-7 дней
                    </li>
                    <li className="flex items-center">
                      <Icon name="Shield" size={16} className="text-green-500 mr-3" />
                      Страхование посылки
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Award" className="mr-3 text-primary" size={24} />
                    Гарантия качества
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Icon name="Calendar" size={16} className="text-green-500 mr-3" />
                      Гарантия 2 года
                    </li>
                    <li className="flex items-center">
                      <Icon name="RefreshCw" size={16} className="text-green-500 mr-3" />
                      Бесплатное ПО обновление
                    </li>
                    <li className="flex items-center">
                      <Icon name="HeadphonesIcon" size={16} className="text-green-500 mr-3" />
                      Техподдержка 24/7
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Gift" className="text-primary mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Акция для первых покупателей</h3>
              </div>
              <p className="text-center text-gray-600 mb-6">
                Скидка 15% на первый заказ и бесплатная доставка по всей России
              </p>
              <div className="text-center">
                <Button size="lg" className="px-8">
                  Получить скидку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Bot" className="text-primary" size={28} />
                <h3 className="text-xl font-bold">AI TOYS STORE</h3>
              </div>
              <p className="text-gray-400">
                Будущее игрушек уже здесь. Откройте мир интеллектуальных развлечений.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Роботы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мягкие игрушки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дроны</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Конструкторы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Инструкции</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@aitoys.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Инноваций, 42
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 AI Toys Store. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Youtube" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;