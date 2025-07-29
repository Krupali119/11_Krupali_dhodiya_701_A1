function getChatbotResponse(question) {
  question = question.toLowerCase();

  if (question.includes('admission')) {
    return "Our admissions are open till 30th July.";
  } else if (question.includes('fees')) {
    return "The annual fee is ₹60,000 including tuition and hostel.";
  } else if (question.includes('courses')) {
    return "We offer BCA, and M.sc, M.sc.IT, M.sc.ICT courses.";
  } else if (question.includes('hostel')) {
    return "Yes, we have separate hostels for boys and girls.";
  } else if (question.includes('library')) {
    return "Our library is open from 10 AM to 6 PM.";
  } else {
    return "Sorry, I didn't understand your question. Try asking about 'admission', 'fees', or 'courses'.";
  }
}

module.exports = { getChatbotResponse };
