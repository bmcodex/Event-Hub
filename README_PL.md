# 🏎️ Event Hub - Dokumentacja Polska

**Platforma Społeczności Eventów Motoryzacyjnych**

---

## 📖 Spis Treści

1. [Przegląd](#przegląd)
2. [Funkcje](#funkcje)
3. [Stack Technologiczny](#stack-technologiczny)
4. [Instalacja](#instalacja)
5. [Użytkowanie](#użytkowanie)
6. [Architektura](#architektura)
7. [Referencja API](#referencja-api)
8. [Współpraca](#współpraca)
9. [Licencja](#licencja)

---

## 🎯 Przegląd

Event Hub to nowoczesna aplikacja webowa zaprojektowana dla fanów motoryzacji do odkrywania, tworzenia i dzielenia się eventami samochodowymi. Niezależnie od tego, czy interesują Cię spotkania BMW, samochody JDM, klasyki, eventy driftowe czy track day'e, Event Hub łączy Cię ze społecznością motoryzacyjną.

### Główne Cechy

- **8 Kategorii Eventów** - BMW, JDM, Klasyki, Drift, Tuning, Racing, Meetup, Track Day
- **Interaktywny Kalendarz** - Przeglądaj eventy po dacie
- **Odkrywanie Oparte na Lokalizacji** - Znajdź eventy blisko Ciebie dzięki integracji mapy
- **Galeria Zdjęć** - Dziel się i przeglądaj zdjęcia z eventów
- **Funkcje Społeczności** - Komentarze, oceny i śledzenie uczestników
- **Powiadomienia w Czasie Rzeczywistym** - Bądź na bieżąco ze zmianami eventów
- **Responsywny Design** - Działa na urządzeniach mobilnych, tabletach i komputerach

---

## ✨ Funkcje

### Zarządzanie Eventami
- Tworzenie i zarządzanie eventami motoryzacyjnymi
- Ustawianie szczegółów eventu (data, czas, lokalizacja, kategoria)
- Śledzenie liczby uczestników i ich statusu
- Śledzenie statusu eventu (nadchodzący, trwający, ukończony, anulowany)

### Odkrywanie i Filtrowanie
- Przeglądanie eventów po kategorii
- Filtrowanie po lokalizacji
- Funkcja wyszukiwania
- Widok kalendarza

### Media i Zawartość
- Przesyłanie zdjęć z eventów
- Galeria zdjęć z opisami
- Polubienia i komentarze do zdjęć
- Profile użytkowników z awatarami

### Zaangażowanie Społeczności
- Pozostawianie komentarzy i recenzji
- Ocenianie eventów (1-5 gwiazdek)
- Śledzenie uczestnictwa w eventach
- Obserwowanie ulubionych kategorii

### Powiadomienia
- Przypomnienia o eventach
- Powiadomienia o aktualizacjach
- Alerty o nowych komentarzach
- Powiadomienia o przesyłaniu zdjęć
- Alerty o anulowaniu eventów

### Funkcje Użytkownika
- Autentykacja OAuth
- Profile użytkowników
- Ustawienia preferencji
- Historia eventów
- Ulubione kategorie

---

## 🛠️ Stack Technologiczny

### Frontend
- **React 19** - Framework UI
- **TypeScript** - Bezpieczeństwo typów
- **Tailwind CSS 4** - Stylowanie
- **Vite** - Narzędzie budowania
- **Lucide React** - Ikony

### Backend
- **Express.js** - Framework webowy
- **Node.js** - Runtime
- **tRPC** - Type-safe API
- **Drizzle ORM** - ORM bazy danych

### Baza Danych
- **MySQL/TiDB** - Relacyjna baza danych
- 8 głównych tabel (Użytkownicy, Eventy, Uczestnicy, Zdjęcia, Komentarze, Oceny, Powiadomienia, Preferencje)

### Dodatkowe
- **Google Maps** - Integracja lokalizacji
- **OAuth 2.0** - Autentykacja
- **JWT** - Zarządzanie sesją

---

## 🚀 Instalacja

### Wymagania
- Node.js 18 lub wyżej
- pnpm (lub npm)
- Baza danych MySQL/TiDB
- Git

### Instalacja Krok po Kroku

```bash
# 1. Klonuj repozytorium
git clone https://github.com/bmcodex/Event-Hub.git
cd Event-Hub

# 2. Zainstaluj zależności
pnpm install

# 3. Utwórz plik środowiska
cp .env.example .env.local

# 4. Skonfiguruj zmienne środowiskowe
# Edytuj .env.local ze swoimi ustawieniami:
# - DATABASE_URL: Twój ciąg połączenia MySQL
# - Dane uwierzytelniające OAuth
# - Klucze API

# 5. Skonfiguruj bazę danych
pnpm db:push

# 6. Uruchom serwer deweloperski
pnpm dev
```

Aplikacja będzie dostępna na `http://localhost:3000`

### Instalacja Docker

```bash
# Zbuduj obraz Docker
docker build -t event-hub .

# Uruchom kontener
docker run -p 3000:3000 event-hub
```

---

## 📖 Użytkowanie

### Tworzenie Eventu

1. Kliknij przycisk "Utwórz Event"
2. Wypełnij szczegóły eventu:
   - Tytuł
   - Opis
   - Kategoria (BMW, JDM, Klasyki, itp.)
   - Lokalizacja
   - Data i czas
   - Maksymalna liczba uczestników (opcjonalnie)
3. Wyślij formularz

### Znajdowanie Eventów

1. **Przeglądaj Kalendarz** - Kliknij na daty, aby zobaczyć eventy
2. **Użyj Filtrów** - Wybierz kategorie do filtrowania
3. **Wyświetl Mapę** - Zobacz eventy na mapie
4. **Szukaj** - Znajdź konkretne eventy

### Uczestnictwo w Eventach

1. Kliknij na event
2. Kliknij "Uczestniczę" lub "Zainteresowany"
3. Twój status zostanie zaktualizowany
4. Będziesz otrzymywać powiadomienia

### Przesyłanie Zdjęć

1. Przejdź do szczegółów eventu
2. Kliknij "Przesyłaj Zdjęcie"
3. Wybierz plik obrazu
4. Dodaj opis (opcjonalnie)
5. Wyślij

### Pozostawianie Komentarzy

1. Przewiń do sekcji komentarzy
2. Napisz swój komentarz
3. Oceń event (1-5 gwiazdek)
4. Kliknij "Opublikuj"

---

## 🏗️ Architektura

### Architektura Frontend
- **Komponenty** - Komponenty UI do ponownego użytku
- **Hooki** - Niestandardowe hooki React
- **Kontekst** - Zarządzanie stanem
- **Narzędzia** - Funkcje pomocnicze

### Architektura Backend
- **Routery tRPC** - Punkty końcowe API
- **Zapytania Bazy Danych** - Warstwa dostępu do danych
- **Autentykacja** - OAuth i JWT
- **Powiadomienia** - Aktualizacje w czasie rzeczywistym

### Schemat Bazy Danych
- **users** - Konta użytkowników
- **events** - Informacje o eventach
- **eventAttendees** - Śledzenie uczestnictwa
- **eventPhotos** - Zdjęcia z eventów
- **eventComments** - Komentarze i recenzje
- **eventRatings** - Oceny eventów
- **notifications** - Powiadomienia użytkowników
- **userPreferences** - Ustawienia użytkownika

---

## 🔌 Referencja API

### Eventy
```
GET /api/trpc/events.list - Lista wszystkich eventów
GET /api/trpc/events.getById - Pobierz event po ID
POST /api/trpc/events.create - Utwórz nowy event
PUT /api/trpc/events.update - Aktualizuj event
DELETE /api/trpc/events.delete - Usuń event
```

### Komentarze
```
GET /api/trpc/comments.list - Lista komentarzy
POST /api/trpc/comments.create - Dodaj komentarz
DELETE /api/trpc/comments.delete - Usuń komentarz
```

### Zdjęcia
```
GET /api/trpc/photos.list - Lista zdjęć
POST /api/trpc/photos.upload - Przesyłaj zdjęcie
DELETE /api/trpc/photos.delete - Usuń zdjęcie
```

### Powiadomienia
```
GET /api/trpc/notifications.list - Lista powiadomień
POST /api/trpc/notifications.markAsRead - Oznacz jako przeczytane
DELETE /api/trpc/notifications.delete - Usuń powiadomienie
```

---

## 🤝 Współpraca

Zapraszamy do współpracy! Proszę zobacz [CONTRIBUTING.md](CONTRIBUTING.md) po wytyczne.

### Przepływ Pracy Deweloperskiej
1. Forkuj repozytorium
2. Utwórz gałąź funkcji
3. Wprowadź zmiany
4. Napisz testy
5. Wyślij pull request

### Styl Kodu
- Używaj TypeScript
- Postępuj zgodnie z regułami ESLint
- Używaj Prettier do formatowania
- Pisz znaczące wiadomości commitów

---

## 📝 Licencja

Ten projekt jest licencjonowany na licencji MIT - zobacz plik [LICENSE](LICENSE) po szczegóły.

---

## 📞 Wsparcie i Kontakt

- 📖 [Pełna Dokumentacja](docs/)
- ❓ [FAQ](FAQ.md)
- 🐛 [Zgłoś Problem](https://github.com/bmcodex/Event-Hub/issues)
- 💡 [Poproś o Funkcję](https://github.com/bmcodex/Event-Hub/issues)

---

## 🗺️ Plan Rozwoju

### Wersja 1.0 (Obecna) ✅
- Kalendarz eventów
- Lista eventów
- Filtry kategorii
- Integracja mapy
- Galeria zdjęć
- Komentarze i oceny
- Powiadomienia

### Wersja 1.1 (Planowana)
- Zaawansowane wyszukiwanie
- Rekomendacje eventów
- Dzielenie się w mediach społecznych
- Serie eventów
- Eventy cykliczne

### Wersja 1.2 (Planowana)
- Aplikacja mobilna
- Czat w czasie rzeczywistym
- Sprzedaż biletów
- Integracja płatności
- Pulpit analityki

### Wersja 2.0 (Przyszłość)
- Rekomendacje oparte na AI
- Eventy wirtualne
- Transmisja na żywo
- Rynek społeczności
- Zaawansowana analityka

---

## 🌟 Statystyki

| Metryka | Wartość |
|---------|---------|
| Łącznie Commitów | 58 |
| Komponenty | 6+ |
| Tabele Bazy Danych | 8 |
| Kategorie Eventów | 8 |
| Pliki Dokumentacji | 20+ |
| Linie Kodu | 4000+ |

---

<div align="center">

**Stworzone z ❤️ przez zespół Event Hub**

*Łącząc fanów motoryzacji na całym świecie*

[🏠 Powrót do Głównej](README.md) | [📖 Wersja Angielska](README_EN.md)

</div>
