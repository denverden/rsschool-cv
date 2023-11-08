## 1. My Name

**Denis Novikov**

## 2. Contact Info

- Email: denverden@mail.ru
- VK: https://vk.com/id7111201
- Instagram: https://www.instagram.com/gnom068/

## 3. Little about me

I love to study and I always open to new knowledge. I have work experience with projects, which allows me to quickly and flexibly respond to changes.
I think that everything is not possible to know. Therefore, I always try to evaluate my knowledge adequately.
It seems to me that the statement of Socrates "I know that I know nothing." may be my credo.

## 4. Skills

- Little Git, HTML, CSS, SASS, JavaScript, Node.js, PHP, MySQL, Java.
- Little CMS (OpenCart, Joomla, WordPress, Bitrix1C).
- Working in Visual Studio Code, Sublime, IntelliJIdea, Notepad++, PhotoShop, Open Server;

## 5. Code examples

```@Override
public List<Diagnosis> getRecords(Long start, Long total) throws DaoException {
String sql = "SELECT * FROM `diagnosis` WHERE `visible` = 1 LIMIT ?, ?";
PreparedStatement preparedStatement = null;
ResultSet resultSet = null;
	try {
		preparedStatement = getConnection().prepareStatement(sql);
		preparedStatement.setLong(1, start);
		preparedStatement.setLong(2, total);
		resultSet = preparedStatement.executeQuery();
		List<Diagnosis> diagnoses = new ArrayList<>();
		while (resultSet.next()) {
			Diagnosis diagnosis = new Diagnosis();
			diagnosis.setId(resultSet.getLong("diagnosis_id"));
			diagnosis.setCode(resultSet.getString("code"));
			diagnosis.setName(resultSet.getString("name"));
			diagnoses.add(diagnosis);
		}
		return diagnoses;
	} catch (SQLException e) {
		throw new DaoException(e);
	} finally {
		try {
			preparedStatement.close();
		} catch (Exception e) {
		}
		try {
			resultSet.close();
		} catch (Exception e) {
		}
	}
}
```

## 6. Experience

- https://denverden-english-for-kids.netlify.app/
- https://denverden-movie-search.netlify.app/
- https://denverden-gem-puzzle.netlify.app/

## 7. Education

#### Finished studies:

- VITEBSK STATE POLYTECHNICAL COLLEGE
- Certificate SEO-specialist school digital-marketer ARTOX
- Certificate LightEnglish, Certification exam for level A2 complated on 27 August 2019
- Trening "EPAM Systems" Java Web-Applications Development
- RSScholl JavaScript/Front-end 2020 Q1 https://app.rs.school/certificate/m92fqnpf
- RSScholl JavaScript/Front-end 2021 Q3 https://app.rs.school/certificate/3ejwgwnp

#### Sources of study:

- rs.school.com
- htmlacademy.ru
- learn.javascript.ru
- w3schools.com
- youtube.com
- Different books

## 8. English

Different tests give me a rating A2 or B1. I think realy my English is between A1 and A2. I continue to study.