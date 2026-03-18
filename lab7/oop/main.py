from models import Animal, Dog, Cat, Parrot

dog    = Dog("Buddy",   3, "golden",  "Labrador")
cat    = Cat("Whiskers",5, "white",   indoor=True)
parrot = Parrot("Polly",2, "green",   "Polly wants a cracker")

animals = [dog, cat, parrot]

print("=== All Animals ===")
for animal in animals:
    print(animal)

print("\n=== Descriptions ===")
for animal in animals:
    print(animal.describe())

print("\n=== Speak (Polymorphism) ===")
for animal in animals:
    print(f"{animal.name}: {animal.speak()}")

print("\n=== Unique Methods ===")
print(dog.fetch())
print(cat.purr())
print(parrot.mimic("Hello!"))
