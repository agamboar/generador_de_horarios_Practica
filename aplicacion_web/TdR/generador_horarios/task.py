""" from finder.models import JudgesDaemon, Problem, TestCase, Category
from finder.scrapers.codeforces import get_problems_by_page_number # se llaman a otros archivos py
from finder.scrapers.codecheft import codechef
from finder.scrapers.dmoj import extract_many, extract_problem

def start_scrapers():
    judges = JudgesDaemon.objects.all()
    servers_downs = 0
    for judge in judges:
        judge.running = True
        if judge.judge_name == "codeforces":
            problems = get_problems_by_page_number(judge.last_page+1)
        if judge.judge_name == "dmoj":
            problems = extract_many(judge.last_page+1)
        elif judge.judge_name == "codechef":
            problems = codechef(judge.difficulty, judge.last_page+1, judge.quantity)

        if len(problems)==0: #not caputre any problem -> server downs
            servers_downs+=1

        for problem in problems:
            new_problem = Problem.objects.create(
                title=problem.title,
                content=problem.content,
                difficulty=problem.difficulty,
                source=problem.source
            ) 
            new_problem.save() # se usa la notacion del shell de django para guardarlos en la base de datos
            for test in problem.testcases:
                TestCase.objects.create(
                    problem=new_problem,
                    input_data=test.input_data,
                    output_data=test.output_data
                )
            for category in problem.categories:
                new_problem_category, _ = Category.objects.get_or_create(
                    name=category
                )
                new_problem.categories.add(new_problem_category)
            # log the amount of new problems added
        judge.last_page = judge.last_page+1
        judge.running = False
        judge.save()

    return servers_downs,len(judges) """