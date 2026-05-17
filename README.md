# Python Demo Project

A simple Python project showcasing best practices for modern development including testing, code formatting, and CI/CD automation.

## 📋 Features

- ✅ Clean, well-documented Python code
- ✅ Comprehensive unit tests with pytest
- ✅ Code formatting with black
- ✅ Automated testing with GitHub Actions
- ✅ Type hints for better code clarity
- ✅ Professional project structure

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Static0P/Test-project.git
cd Test-project
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

### Running the Application

```bash
python main.py
```

Expected output:
```
Hello, Developer! Welcome to the demo project.
5 + 3 = 8
4 * 7 = 28
5! = 120
```

### Running Tests

```bash
pytest test_main.py -v
```

Run tests with coverage:
```bash
pytest test_main.py --cov=main
```

### Code Formatting

Format code with black:
```bash
black main.py test_main.py
```

Check code style:
```bash
pylint main.py
```

## 📁 Project Structure

```
Test-project/
├── main.py                 # Main application
├── test_main.py           # Unit tests
├── requirements.txt       # Project dependencies
├── README.md              # This file
└── .github/
    └── workflows/
        └── test.yml       # CI/CD workflow
```

## 🧪 Testing

The project includes comprehensive unit tests covering:
- Greeting functionality
- Arithmetic operations (addition, multiplication)
- Factorial calculation with edge cases
- Error handling

All tests run automatically via GitHub Actions on every push and pull request.

## 🔄 CI/CD Pipeline

The project uses GitHub Actions to:
- Run tests on multiple Python versions (3.8, 3.9, 3.10, 3.11)
- Check code formatting
- Validate code quality

## 📚 Functions

### `greet(name: str) -> str`
Greets a user by name.

### `add(a: int, b: int) -> int`
Adds two numbers.

### `multiply(a: int, b: int) -> int`
Multiplies two numbers.

### `calculate_factorial(n: int) -> int`
Calculates the factorial of a number.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests locally
4. Push to your branch
5. Create a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

Static0P

---

**Happy coding!** 🎉
