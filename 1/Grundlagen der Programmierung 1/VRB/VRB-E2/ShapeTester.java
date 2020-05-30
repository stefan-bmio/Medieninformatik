public class ShapeTester {
	public static void main(String[] args) {
		Shape shape = new Shape(10, 40);
		Rectangle rectangle = new Rectangle(20, 30, 35, 15);
		Square square = new Square(30, 20, 5);
		Circle circle = new Circle(40, 10, 25);
		
		Reporter.report(shape);
		Reporter.report(rectangle);
		Reporter.report(square);
		Reporter.report(circle);
	}
}
